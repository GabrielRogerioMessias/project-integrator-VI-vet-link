const messages = {
  firebaseErrors: {
    "auth/wrong-password": "Senha atual está incorreta.",
    "auth/user-not-found": "Usuário não encontrado.",
    "auth/weak-password": "A nova senha é muito fraca.",
    "auth/requires-recent-login": "Reautenticação necessária.",
    "auth/email-already-in-use": "Este email já está em uso.",
    "auth/invalid-email": "O email é inválido.",
    // Adicione mais erros conforme necessário
  } as { [key: string]: string }, // Adicionando o tipo para aceitar qualquer string
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
