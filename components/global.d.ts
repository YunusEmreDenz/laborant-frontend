import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      MantineDrawer: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
      MantineSearch: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    }
  }
}
