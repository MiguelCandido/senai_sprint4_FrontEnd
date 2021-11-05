import './App.css';
import { Component } from "react";

class Repositories extends Component{
  constructor(props){
    super(props);
    this.state={
      listaRepos:[],
      idRepo : 0,
      nomeRepo : '',
      descricaoRepo : '',
      dataRepo : new Date(),
      tamanhoRepo : 0,
      nomeUser : ''
    }
  };

  buscarRepos = async (event) => {

    event.preventDefault()
    
    fetch ("https://api.github.com/users/"+this.state.nomeUser+"/repos")

    .then(retorno => retorno.json())
    .then(dados => this.setState({listaRepos : dados}))
    
    //console.log(this.state.nomeUser)
    .catch (erro => console.log(erro))

    await console.log(this.state.listaRepos)
  }

  updateNomeUser = async (event) => {
    await this.setState({
      nomeUser : event.target.value

    })

    console.log(this.state.nomeUser)
  }

  componentWillUnmount(){
  
  }

  render() {
    return (
      <div>
        <main>
          <section id = "tela">
            <div>
            <h2 id="titulo">Busca de Repositório</h2>
            <form onSubmit={this.buscarRepos}>
              <label>Nome do usuário</label>
              <input type="text" value={this.nomeUser} placeholder="Nome do usuário" onChange ={this.updateNomeUser} />
              <button type="submit"> Buscar </button>
            </form>
            </div>

            <div>
            <table id="tabelaRepos">
                <thead>
                  <tr>
                    <th>Id do repositório</th>
                    <th>Nome do repositório</th>
                    <th>Descrição do repositório</th>
                    <th>Data de criação do repositório</th>
                    <th>Tamanho do repositório</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    this.state.listaRepos.map((Repo) =>{
                      return(
                        <tr key ={Repo.id}>
                          <td>{Repo.id}</td>
                          <td>{Repo.name}</td>
                          <td>{Repo.description}</td>
                          <td>{Repo.created_at}</td>
                          <td>{Repo.size}</td>
                        </tr>
                      );

                    })
                  }
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>

    )
  }

}

export default Repositories;