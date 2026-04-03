const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const unidades = require('./dados');
const estados = require('./estados');
const config = require('./config');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    console.log('QR Code recebido, escaneie para conectar:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot conectado!');
});

client.initialize();

function saudacao() {
    const hora = new Date().getHours();
    if (hora >= 5 && hora < 12) return 'Bom dia';
    if (hora >= 12 && hora < 18) return 'Boa tarde';
    return 'Boa noite';
}

client.on('message', async msg => {

    console.log('Mensagem recebida:', msg.body);

    if (msg.fromMe) return;        

    const numero = msg.from;
    const texto = msg.body.trim();

    console.log(`[MSG] ${numero}: ${texto}`);
    
    if (estados[numero]?.etapa === "humano") {
        return;
    }

    // Lógica do Menu
    if (/oi|olá|ola|menu|bom dia|boa tarde|boa noite/i.test(texto)) {

        estados[numero] = { etapa: "menu" };

        await msg.reply(
            `${saudacao()}! 👋\n\n` +
            "Sou o Assistente da Escola de Natação.\n\n" +
            "*Escolha uma opção:*\n\n" +
            "1️⃣ Ver unidades\n" +
            "2️⃣ Mensalidade\n" +
            "3️⃣ Contato\n" +
            "4️⃣ Sobre a Escola\n" +
            "5️⃣ Falar com atendente"
        );

        return;
    }

    // Lógica das Unidades
    if (texto === '1' && estados[numero]?.etapa === 'menu') {

        estados[numero] = { etapa: "unidades" };

        let resposta = "*Nossas unidades:*\n\n";

        for (const id in unidades) {
            resposta += `${id}️⃣ ${unidades[id].nome}\n`;
        }

        resposta += "\nDigite o número da unidade.";

        await msg.reply(resposta);
        return;
    }

    // Lógica da escolha da unidade
    if (estados[numero]?.etapa === "unidades") {

        const unidade = unidades[texto];

        if (!unidade) {
            await msg.reply("❌ Opção inválida. Digite o número da unidade.");
            return;
        }

        estados[numero] = {
            etapa: "modalidades",
            unidadeId: texto
        };

        let resposta = `🏊 *${unidade.nome}*\n\n*Modalidades:*\n\n`;

        for (const id in unidade.modalidades) {
            resposta += `${id}️⃣ ${unidade.modalidades[id].nome}\n`;
        }

        resposta += "\nDigite o número da modalidade.";

        await msg.reply(resposta);
        return;
    }

    // Lógica da escolha da modalidade
    if (estados[numero]?.etapa === "modalidades") {

        const unidade = unidades[estados[numero].unidadeId];
        const modalidade = unidade.modalidades[texto];

        if (!modalidade) {
            await msg.reply("❌ Opção inválida. Digite o número da modalidade.");
            return;
        }

        let resposta = `📅 *${modalidade.nome}*\n\n*Horários:*\n\n`;

        modalidade.horarios.forEach(h => {
            resposta += `• ${h}\n`;
        });

        resposta += "\nDigite *menu* para voltar.";

        estados[numero].etapa = "final";

        await msg.reply(resposta);
        return;
    }

    // Lógica do atendimento humano
    if (texto === '5' && estados[numero]?.etapa === 'menu') {

        estados[numero] = { etapa: "humano" };

        const contact = await msg.getContact();
        const nome = contact.pushname || contact.number;

        await msg.reply(
            `👩‍💻 *Atendimento humano*\n\n` +
            `Um atendente falará com você em breve.\n\nAguarde.`
        );

        await client.sendMessage(config.numeroAtendente,
            `📢 *Novo cliente aguardando atendimento*\n\n` +
            `Nome: ${nome}\n` +
            `Número: ${numero}`
        );

        return;
    }

});