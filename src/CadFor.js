import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class CadFor extends Component {

  state = {
    Nome: '',
    Email: '',
    Telefone: '',
    CPNJ: '',
    Cep: '',
    Endereço: '',
    Cidade: '',
    Estado: '',

  }

  handlesetnome = (textnome) => {
    this.setState(() => {
      return {
        nome: textnome,

      }
    })
  }

  handlesetemail = (textemail) => {
    this.setState(() => {
      return {
        Email: textemail
      }
    })
  }

  handlesettelefone = (texttelefone) => {
    this.setState(() => {
      return {
        Telefone: texttelefone
      }
    })
  }

  handlesetcnpj = (textcnpj) => {
    this.setState(() => {
      return {
        CPNJ: textcnpj
      }
    })
  }

  handlesetcep = (textcep) => {
    this.setState(() => {
      return {
        Cep: textcep
      }
    })
  }

  handlesetendereco = (textendereco) => {
    this.setState(() => {
      return {
        Endereço: textendereco
      }
    })
  }

  handlesetcidade = (textcidade) => {
    this.setState(() => {
      return {
        Cidade: textcidade
      }
    })
  }

  handlesetestado = (textestado) => {
    this.setState(() => {
      return {
        Estado: textestado
      }
    })
  }



  render() {
    console.log(this.state.Estado)
    return (
      <div style={{ height: '100vh', width: '100%', backgroundColor: '#00ccff' }} >
        <div style={{ height: '15%', textAlign: 'center' }} >Cadastro Fornecedor</div>
        <Card style={{ backgroundColor: '#F2F2F2' }}>
          <CardContent>
            <form  >
              <TextField fullWidth onChange={e => this.handlesetnome(e.target.value)} style={{ margin: '5px' }} label="Nome" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetemail(e.target.value)} style={{ margin: '5px' }} label="Email" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesettelefone(e.target.value)} style={{ margin: '5px', }} label="Telefone" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetcnpj(e.target.value)} style={{ margin: '5px', }} label="CPNJ" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetcep(e.target.value)} style={{ margin: '5px', }} label="Cep" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetendereco(e.target.value)} style={{ margin: '5px' }} label="Endereço" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetcidade(e.target.value)} style={{ margin: '5px' }} label="Cidade" variant="outlined" />
              <TextField fullWidth onChange={e => this.handlesetestado(e.target.value)} style={{ margin: '5px' }} label="Estado" variant="outlined" />
              <div style={{ textAlign: 'center' }} >
                <Button style={{ marginTop: '20px' }} variant="outlined" color="primary">
                  Salvar
                </Button>
              </div>

            </form>
          </CardContent>
        </Card>
      </div>

    );
  }
}
export default CadFor;

