import React, { ReactNode } from 'react';
import { Address, AddressBookEntry, AppState, Info, PasswordState, RPCConfig, ReceivePageState, SendPageState, ServerSelectState, TotalBalance, ValueTransfer, WalletSettings, Server, FetchErrorType } from "../components/appstate";
import { ErrorModalData } from '../components/errormodal';

export const defaultAppState: AppState = {
  totalBalance: new TotalBalance(),
  addressPrivateKeys: new Map(),
  addressViewKeys: new Map(),
  addresses: [] as Address[],
  addressBook: [] as AddressBookEntry[],
  valueTransfers: [] as ValueTransfer[],
  errorModalData: new ErrorModalData(),
  serverSelectState: new ServerSelectState(),
  sendPageState: new SendPageState(),
  receivePageState: {} as ReceivePageState,
  rpcConfig: new RPCConfig(),
  info: new Info(),
  verificationProgress: 100,
  rescanning: false,
  prevSyncId: -1,
  passwordState: new PasswordState(),
  walletSettings: new WalletSettings(),
  readOnly: false,
  serverUris: [] as Server[],
  fetchError: {} as FetchErrorType,
};

export const ContextApp = React.createContext(defaultAppState);

type ContextProviderProps = {
  children: ReactNode;
  value: AppState;
};

export const ContextAppProvider = ({ children, value }: ContextProviderProps) => {
  return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};