// @mui
import { Divider, IconButton, Stack } from '@mui/material';
import { GithubLogo, GoogleLogo, TwitterLogo } from 'phosphor-react';

// ----------------------------------------------------------------------

export default function AuthSocial() {


  const handleGoogleLogin = async () => {

  };

  const handleGithubLogin = async () => {
    
  };

  const handleTwitterLogin = async () => {
    
  };

  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton onClick={handleGoogleLogin}>
          <GoogleLogo color="#0E4C92" />
        </IconButton>

        <IconButton  onClick={handleGithubLogin}>
          <GithubLogo color="#DF3E30" />
        </IconButton>

        <IconButton onClick={handleTwitterLogin}>
          <TwitterLogo color="#0E4C92" />
        </IconButton>
      </Stack>
    </div>
  );
}
