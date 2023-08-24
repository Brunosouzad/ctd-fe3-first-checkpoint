import AppCss from './App.module.css';
import AppCssError from './AppError.module.css';
import Card from './Component/Card';
import { useState } from 'react';

function App() {
  const [list, setList] = useState({ nome: '', cor: '' });
  const [errorForm, setErrorForm] = useState('');
  const [cards, setCards] = useState([]);

  function onSubmit(event) {
    event.preventDefault();

    let contemNumero = false;

    function isNum(val) {
      return !isNaN(val);
    }

    for (let i = 0; i < list.cor.length; i++) {
      if (isNum(list.cor[i])) {
        contemNumero = isNum(list.cor[i]);
      }
    }

    if (
      !list.nome.trim() || list.nome.length < 3 || list.cor.length < 6 || !contemNumero ) {
      setErrorForm('Por favor, verifique os dados inseridos no formulário');
    } else {
      setCards([...cards, { nome: list.nome, cor: list.cor }]);
      setList({ nome: '', cor: '' });
      setErrorForm('');
    }
  }

  return (
    <div className="App">
      <form
        onSubmit={onSubmit}
        className={errorForm ? AppCssError.formError : AppCss.form}
      >
        <h1>ADICIONAR NOVA COR</h1>
        <div
          className={
            errorForm ? AppCssError.containerInputs : AppCss.containerInputs
          }
        >
          <div>
            <label Cl="nomeCor">Nome</label>
            <br />
            <input
              type="text"
              name="nomeCor"
              onChange={(event) =>
                setList({ ...list, nome: event.target.value })
              }
              value={list.nome}
            />
          </div>
          <div>
            <label className="corHex">Cor</label>
            <br />
            <input
              type="text"
              name="corHex"
              placeholder="Insira sua cor no formato Hexadecimal"
              onChange={(event) =>
                setList({ ...list, cor: event.target.value })
              }
              value={list.cor}
            />
          </div>
        </div>
        <button
          type="submit"
          className={
            errorForm.length <= 0 ? AppCss.buttonEnvio : AppCssError.buttonEnvio
          }
          disabled={!list.nome.trim() || !list.cor.trim() || list.nome.length < 3 || list.cor.length < 6}
        >
          ADICIONAR
        </button>
      </form>
      <h3
        className={
          errorForm ? AppCssError.tituloError : AppCss.tituloError
        }
      >
        {errorForm}
      </h3>
      <div className={AppCss.containerCards}>
        <div className={AppCss.boxTitulo}>
          <h2>CORES FAVORITAS</h2>
        </div>
        {cards.map((card, index) => (
          <Card key={index} nome={card.nome} cor={card.cor} />
        ))}
      </div>
    </div>
  );
}

export default App;