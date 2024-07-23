// Referências aos elementos HTML
const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

const loginContainer = document.getElementById("loginContainer");
const cadastroContainer = document.getElementById("cadastroContainer");

function mostrarLogin() {
    loginContainer.style.display = 'block';
    cadastroContainer.style.display = 'none';
}

function mostrarCadastro() {
    loginContainer.style.display = 'none';
    cadastroContainer.style.display = 'block';
}

// Função de login
function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuário ou senha incorreta!";

    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = 'index1.html';
                break;
            }
        }
    }
    alert(mensagem);
}

// Função de cadastro
function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        };

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }

        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        mostrarLogin();  // Após o cadastro, mostrar a tela de login
    } else {
        alert("As senhas são diferentes!");
    }
}
