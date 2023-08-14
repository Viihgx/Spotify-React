// // Importando os componentes do React e do MUI
// import React from 'react';
// import { Button, TextField, Box, Typography } from '@mui/material';
// import SpotifyIcon from '@mui/icons-material/MusicNote';

// // Definindo o tema da página
// const theme = {
//   palette: {
//     primary: {
//       main: '#00000',
//     },
//     secondary: {
//       main: '#ffffff',
//     },
//     background: {
//       default: '#000000',
//     },
//   },
// };

// // Criando o componente da página de login
// function Login() {

            
//   // Criando os estados para armazenar os valores dos campos de texto
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   // Criando as funções para atualizar os estados dos campos de texto
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   // Criando a função para enviar os dados do login
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aqui você pode adicionar a lógica para validar e enviar os dados do login
//     console.log(email, password);
//   };

//   // Retornando o JSX da página de login
//   return (
    
    
//     <div style={{ backgroundColor: theme.palette.background.default, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
//       <Box component="form" onSubmit={handleSubmit} sx={{ width: 400, padding: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//           <SpotifyIcon sx={{ fontSize: 64, color: theme.palette.secondary.main }} />
//         </Box>
//         <Typography variant="h4" align="center" color="secondary" sx={{ marginTop: 2 }}>
//           Entrar no Spotify
//         </Typography>
//         <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 4 }}>
//           Continuar com o Google
//         </Button>
//         <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
//           Continuar com o Facebook
//         </Button>
//         <Button variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
//           Continuar com a Apple
//         </Button>
//         <Typography variant="body1" align="center" color="secondary" sx={{ marginTop: 4 }}>
//           OU
//         </Typography>
//         <TextField label="E-mail ou nome de usuário" value={email} onChange={handleEmailChange} fullWidth sx={{ marginTop: 4 }} />
//         <TextField label="Senha" value={password} onChange={handlePasswordChange} type="password" fullWidth sx={{ marginTop: 2 }} />
//         <Button variant="contained" color="primary" type="submit" fullWidth sx={{ marginTop: 4 }}>
//           Entrar
//         </Button>
//         <Typography variant="body2" align="center" color="secondary" sx={{ marginTop: 4 }}>
//           Esqueceu sua senha?
//         </Typography>
//       </Box>
//     </div>

//   );
// }

// // Exportando o componente da página de login
// export default Login;

import React from 'react';
import { Button, TextField, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    backgroundColor: 'black',
    fontFamily: 'Arial, Helvetica, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    margin: '20px'
  },
  button: {
    width: '80%',
    margin: '10px',
    borderRadius: '25px'
  },
  form: {
    width: '80%',
    margin: '20px'
  },
  input: {
    margin: '10px'
  },
  link: {
    color: 'white',
    margin: '10px'
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO: implement login logic
    alert('Logged in!');
  }

  render() {
    const { classes } = this.props; // use classes from props instead of useStyles hook
    return (
      <div className={classes.root}>
        <Typography variant="h4" className={classes.title}>Entrar no Spotify</Typography>
        <Button variant="contained" className={classes.button}>Continuar com o Google</Button>
        <Button variant="contained" color="primary" className={classes.button}>Continuar com o Facebook</Button>
        <Button variant="contained" className={classes.button}>Continuar com a Apple</Button>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField variant="outlined" className={classes.input} type="text" name="email" label="Email ou nome de usuário" value={this.state.email} onChange={this.handleChange}/>
          <TextField variant="outlined" className={classes.input} type="password" name="password" label="Senha" value={this.state.password} onChange={this.handleChange}/>
          <Button type="submit" variant="contained" color="secondary" className={classes.button}>Entrar</Button>
        </form>
        <Link className={classes.link} href="#">Inscreva-se grátis</Link>
        <Link className={classes.link} href="#">Esqueceu sua senha?</Link>
      </div>
    );
  }
}

export default withStyles(styles)(Login); // wrap the component with withStyles HOC



