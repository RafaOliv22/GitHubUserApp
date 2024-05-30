const urlApi = "https://api.github.com";

const getUser = async (usuario) => {
  try {
    const response = await fetch(`${urlApi}/users/${usuario}`);
    const data = await response.json();

    if (!response.ok) {
      console.error("Usuário não encontrado");
      return null;
    }
    return data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};

export { getUser };
