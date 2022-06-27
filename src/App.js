import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCard: '',
      descriptionCard: '',
      firstAtt: '',
      secondAtt: '',
      thirdAtt: '',
      imageInput: '',
      rareInput: '',
      trunfoInput: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.type === 'checkbox'
      ? event.target.checked : event.target.value });
  }

  render() {
    const { nameCard,
      descriptionCard,
      firstAtt,
      secondAtt,
      thirdAtt,
      imageInput,
      rareInput,
      trunfoInput } = this.state;
    return (
      <div className="div-app-form">
        <div className="div-titulo-form">
          <div className="div-titulo">
            <h1>Adicione uma nova carta</h1>
          </div>
          <div className="div-app-form2">
            <Form
              cardName=""
              cardDescription=""
              cardAttr1=""
              cardAttr3=""
              cardAttr2=""
              cardImage=""
              cardRare=""
              cardTrunfo={ false }
              hasTrunfo
              isSaveButtonDisabled={ false }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ () => {} }
            />
          </div>
          <Card
            cardName={ nameCard }
            cardDescription={ descriptionCard }
            cardAttr1={ firstAtt }
            cardAttr2={ secondAtt }
            cardAttr3={ thirdAtt }
            cardImage={ imageInput }
            cardRare={ rareInput }
            cardTrunfo={ trunfoInput }
          />
        </div>
      </div>
    );
  }
}

export default App;
