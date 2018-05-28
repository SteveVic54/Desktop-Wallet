/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';

import WalletList from './components/Wallet/';
import VoteList from './components/Vote/';
import TokenList from './components/Tokens/';
import TokenView from './components/Tokens/View';
import ContactList from './components/Contact/';
import SettingList from './components/Settings/';
import SendAmount from './components/Wallet/Send/SendAmount';
import Receive from './components/Wallet/Receive/';
import Create from './components/Wallet/Create/';
import CreateAccount from './components/Wallet/CreateAccount/';
import WalletView from './components/Wallet/WalletView/';
import ViewTransaction from './components/Wallet/WalletView/View';
import WalletBackup from './components/Wallet/Backup/';
import Share from './components/Settings/Share';
import ContactDetails from './components/Contact/ContactDetails';
import VoteDetails from './components/Vote/VoteDetails';
import Support from './components/Settings/Support';
import AddressBook from './components/Settings/AddressBook';
import Language from './components/Settings/Language';
import Notifications from './components/Settings/Notifications';
import CreateToken from './components/Tokens/CreateToken';

export const routes = [
  {
    path: "/wallets/",
    sidebar: () => <WalletList />,
  },
  {
    path: "/wallets/walletDetails/:account/:token?",
    main: () => <WalletView />
  },
  {
    path: "/wallets/walletBackup/",
    main: () => <WalletBackup />
  },
  {
    path: "/wallets/create",
    main: () => <Create />,
  },
  {
    path: "/wallets/createAccount",
    main: () => <CreateAccount />,
  },
  {
    path: "/wallets/send/:account/:token?",
    main: () => <SendAmount />,
  },
  {
    path: "/wallets/receive",
    main: () => <Receive />,
  },
  {
    path: "/settings/",
    sidebar: () => <SettingList />,
  },
  {
    path: "/settings/addressbook",
    main: () => <AddressBook />,
  },
  {
    path: "/settings/help",
    main: () => <Support />,
  },
  {
    path: "/settings/share",
    main: () => <Share />,
  },
  {
    path: "/settings/notifications",
    main: () => <Notifications />,
  },
  {
    path: "/settings/language",
    main: () => <Language />
  },
  {
    path: "/vote",
    sidebar: () => <VoteList />,
  },
  {
    path: "/vote/voteDetails/:witnesses?",
    main: () => <VoteDetails />
  },
  {
    path: "/tokens",
    sidebar: () => <TokenList />,
  },
  {
    path: "/tokens/TokenDetails/:token",
    main: () => <TokenView />,
  },
  {
    path: "/tokens/createtoken/",
    main: () => <CreateToken />,
  },
  {
    path: "/contacts",
    sidebar: () => <ContactList />,
    main: () => <ContactDetails />
  },
];
