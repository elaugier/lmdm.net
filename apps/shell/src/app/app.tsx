import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import NavBar, { NavItem } from './components/navigation';

import Welcome from './components/welcome';

const Read = React.lazy(() => import('read/Module'));

const Write = React.lazy(() => import('write/Module'));

const Contribute = React.lazy(() => import('contribute/Module'));

const Moderate = React.lazy(() => import('moderate/Module'));

const Manage = React.lazy(() => import('manage/Module'));

const Profile = React.lazy(() => import('profile/Module'));

const Members = React.lazy(() => import('members/Module'));

const Faq = React.lazy(() => import('faq/Module'));

const About = React.lazy(() => import('about/Module'));

const Contact = React.lazy(() => import('contact/Module'));

export function App() {
  const nav: NavItem[] = [
    { name: 'Accueil', href: '/', current: true },
    { name: 'Lire', href: '/read', current: false },
    { name: 'Ecrire', href: '/write', current: false },
    { name: 'Contribuer', href: '/contribute', current: false },
    { name: 'Modérer', href: '/moderate', current: false },
    { name: 'Administrer', href: '/manage', current: false },
    { name: 'Les membres', href: '/members', current: false },
    { name: 'FAQ', href: '/faq', current: false },
    { name: 'A propos', href: '/about', current: false },
    { name: 'Contactez-nous', href: '/contact', current: false },
  ];
  return (


    <React.Suspense fallback={null}>
      <NavBar navigation={nav}></NavBar>
      <Routes>
        <Route path="/" element={<Welcome />} />

        <Route path="/read" element={<Read />} />

        <Route path="/write" element={<Write />} />

        <Route path="/contribute" element={<Contribute />} />

        <Route path="/moderate" element={<Moderate />} />

        <Route path="/manage" element={<Manage />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/members" element={<Members />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </React.Suspense>

  );
}

export default App;
