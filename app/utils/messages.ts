const messages = {
  firebaseErrors: {
    "auth/wrong-password": "Senha incorreta. Verifique e tente novamente.",
    "auth/user-not-found":
      "Usuário não encontrado. Verifique o e-mail informado.",
    "auth/weak-password": "A senha informada é muito fraca.",
    "auth/requires-recent-login": "É necessária uma reautenticação.",
    "auth/email-already-in-use": "Este e-mail já está em uso.",
    "auth/invalid-email": "O e-mail informado é inválido.",
    "auth/too-many-requests":
      "Muitas tentativas de login. Tente novamente mais tarde.",
    "auth/network-request-failed":
      "Falha de rede. Verifique sua conexão e tente novamente.",
  } as { [key: string]: string },
  validationErrors: {
    actualPassword: "A senha atual é obrigatória",
    newPasswordMin: "A senha deve ter pelo menos 6 caracteres",
    newPasswordNotSame: "A nova senha não pode ser igual à senha atual",
    newPasswordRequired: "A nova senha é obrigatória",
    confirmNewPassword: "Confirmação de senha é obrigatória",
    confirmPasswordMatch: "A confirmação deve ser igual à nova senha",
  },
  success: {
    passwordUpdated: "Senha alterada com sucesso!",
  },
  generic: {
    userNotFound: "Usuário não encontrado.",
    emailNotAvailable: "O e-mail do usuário não está disponível.",
    updateFailed: "Falha ao alterar a senha: ",
  },
};

export default messages;
