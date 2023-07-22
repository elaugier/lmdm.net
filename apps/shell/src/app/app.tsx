import * as React from 'react';

import { Link, Route, Routes } from 'react-router-dom';
import NavBar, { NavItem } from './components/navigation';

import Welcome from './components/welcome';
import Footer from './components/footer';
import Oops from './components/oops';

const Messages = React.lazy(() => import('messages/Module'));

const Settings = React.lazy(() => import('settings/Module'));

const Notifications = React.lazy(() => import('notifications/Module'));

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
        <Route path="/" element={<Welcome />} errorElement={<Oops></Oops>} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/read" element={<Read />} errorElement={<Oops></Oops>} />

        <Route path="/write" element={<Write />} errorElement={<Oops></Oops>} />

        <Route
          path="/contribute"
          element={<Contribute />}
          errorElement={<Oops></Oops>}
        />

        <Route
          path="/moderate"
          element={<Moderate />}
          errorElement={<Oops></Oops>}
        />

        <Route
          path="/manage"
          element={<Manage />}
          errorElement={<Oops></Oops>}
        />

        <Route
          path="/profile"
          element={<Profile />}
          errorElement={<Oops></Oops>}
        />

        <Route
          path="/members"
          element={<Members />}
          errorElement={<Oops></Oops>}
        />

        <Route path="/faq" element={<Faq />} errorElement={<Oops></Oops>} />

        <Route path="/about" element={<About />} errorElement={<Oops></Oops>} />

        <Route
          path="/contact"
          element={<Contact />}
          errorElement={<Oops></Oops>}
        />
      </Routes>
      <Footer></Footer>
    </React.Suspense>
  );
}

export default App;
