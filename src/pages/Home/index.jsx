// import React from 'react';
// import { Grid } from '@material-ui/core';

// function Home() {
//   return (
//     <div className="home">
//       {/* Cria um componente Grid com a propriedade container */}
//       <Grid container>
//         {/* Cria um componente Grid com a propriedade item e xs={12} */}
//         <Grid item xs={12}>
//           {/* Coloca o conteúdo do primeiro elemento aqui */}
//         </Grid>
//         {/* Cria um componente Grid com a propriedade item e md={4} */}
//         <Grid item md={4}>
//           {/* Coloca o conteúdo do segundo elemento aqui */}
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Home;



import React from 'react';
import Sidebar from '../../components/Sidebar';
// import FeaturedPlaylists from '../../components/FeaturedPlaylists';
import './index.css';

function Home() {
  return (
      <div className="content">
        <Sidebar />
        <div className="main-content">
          {/* <FeaturedPlaylists /> */}
        </div>
      </div>
  );
}

export default Home;




