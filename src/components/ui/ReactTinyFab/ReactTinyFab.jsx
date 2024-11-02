import React from 'react';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css'; 
import { Icon } from 'react-icons-kit'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {addressBook} from 'react-icons-kit/fa/addressBook'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function ReactTinyFab() {
  const handleClick = (actionName) => {
    console.log(`${actionName} clicked`);
  };

  return (
    <div className='fontPlaywrite'>
      <Fab
        mainButtonStyles={{ 
          backgroundColor: '#224163',
          width: 40, 
          height: 40, 
          bottom: 0, 
          right: 0
         }}
         position={{ bottom: 0, right: 0 }}
        icon={<FontAwesomeIcon icon={faPlus} />}
        alwaysShowTitle={true}
      >
        <Action
          text="Github"
          onClick={() => window.open('https://github.com/Iamzayed007','_blank')}
          style={{ 
            backgroundColor: '#224163',
            width: 40, 
            height: 40, 
            bottom: 0, 
            right: 0
           }}
        >
         <Icon size={23} icon={githubSquare} />
        </Action>
        <Action
          text="LinkedIn"
          onClick={() => window.open('https://www.linkedin.com/in/iamzayed/','_blank')}
          style={{ 
            backgroundColor: '#224163',
            width: 40, 
            height: 40, 
            bottom: 0, 
            right: 0
           }}
        >
          <Icon size={23} icon={linkedinSquare} />
        </Action>
      </Fab>
    </div>
  );
}

export default ReactTinyFab;
