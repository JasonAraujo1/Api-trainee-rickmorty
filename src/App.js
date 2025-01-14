import React, { useState, useEffect } from "react";

const fetchApi = (value) => {
  return fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Exibe os dados no console
      return data;
    })
    .catch((err) => {
      console.error("Erro:", err);
      return null;
    });
  // Retorna null em caso de erro
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [charactersData, setCharactersData] = useState(null);

  useEffect(() => {
    fetchApi(1).then((data) => setCharactersData(data)); // Chama a função ao montar o componente
  }, []);

  function handlebtnVai() {
    if (inputValue) {
      fetchApi(inputValue).then((data) => setCharactersData(data));
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Atualiza o estado com o valor do input
      />
      <button onClick={handlebtnVai}>vai</button>
      <div>
        {charactersData && charactersData.image && (
          <img src={charactersData.image} alt="Personagem" />
        )}
      </div>
    </div>
  );
};
export default App;
