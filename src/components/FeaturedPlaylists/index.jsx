import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

function FeaturedPlaylists() {
  // Simule dados das listas de reprodução
  const playlists = [
    { id: 1, name: 'Top Hits', image: 'url-da-imagem' },
    // Adicione mais listas de reprodução
  ];

  return (
    <Grid container spacing={3}>
      {playlists.map((playlist) => (
        <Grid item key={playlist.id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia component="img" image={playlist.image} alt={playlist.name} />
            <CardContent>
              <Typography variant="subtitle1">{playlist.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default FeaturedPlaylists;
