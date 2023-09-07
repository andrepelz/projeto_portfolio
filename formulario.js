export default function enviarFormulario(e) {
    e.preventDefault();

    const nome = document.getElementById("formulario__nome");
    const email = document.getElementById("formulario__email");
    const telefone = document.getElementById("formulario__telefone");
    const assunto = document.getElementById("formulario__assunto");
    const mensagem = document.getElementById("formulario__mensagem");

    emailjs.send("service_4i3l74r","template_tbx0ush",{
        input_nome: nome.value,
        input_email: email.value,
        input_telefone: telefone.value,
        input_assunto: assunto.value,
        input_mensagem: mensagem.value
    });

    const botao = document.getElementById("formulario__botao");

    console.log(botao.classList);

    botao.disabled = true;
    botao.classList.remove("formulario__botao--enabled");
    botao.classList.add("formulario__botao--disabled");

    console.log(botao.classList);
}