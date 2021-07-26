import React from 'react';
import Styles from './App.module.scss';
import CardButton from '../Components/CardButton/CardButton';
import Card from '../Components/Card/Card';
import Recents from '../Components/Recents/Recents';
import TextInput from '../Components/TextInput/TextInput';

interface Button {
  icon: string;
  url: string;
  title: string;
}

const buttons:Button[] = [
  {icon: 'explore', url: '/explore', title: 'Fill in a new form'}, // New
  {icon: 'edit', url: '/amend', title: 'Amend an existing draft'}, // Edit
  {icon: 'approval', url: '/approval', title: 'View my pending approvals'}, // Approvals
  {icon: 'list', url: '/submissions', title: 'View my pending submissions'}, // Submissions
  {icon: 'history', url: '/history', title: 'View a history of my submissions'}, // History
  {icon: 'groups', url: '/team', title: 'View my reports'}, // Team
  {icon: 'settings', url: '/settings', title: 'Settings'}, // Settings
  {icon: 'help', url: '/help', title: 'Help'}, // Help
  
]

function App() {
  return (
    <main>
      <section className={Styles.actions}>
        {buttons.map((button: Button) => {
          return (<CardButton key={button.title} icon={button.icon} url={button.url} title={button.title}/>)
        })}
      </section>
      <section>
        <TextInput id={'potato'} label={'Potato'}/>
        <Card hover={false}>
          <div className={Styles.contents}>
            <h1> Potato </h1>
          </div>
        </Card>
      </section>
      <section>
        <Recents/>
      </section>
    </main>
  );
}

export default App;
