import * as React from 'react';
import type { NextPage } from 'next';
import { MugsContext } from '../context/mugs';

const Test: NextPage = () => {
  const { mugs } = React.useContext(MugsContext);

  console.log(mugs);

  return <div>Test</div>;
};

export default Test;
