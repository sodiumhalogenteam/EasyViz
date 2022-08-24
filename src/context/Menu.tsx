import React from 'react';

// create the language context with default selected language
export const MenuContext = React.createContext({
  showMobileNav: false,
  toggleShowMobileNav: () => {},
});

export function useMenu() {
  return React.useContext(MenuContext);
}

type MenuProviderType = {
  children: JSX.Element;
};

// it provides the language context to app
export function MenuProvider({ children }: MenuProviderType) {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const toggleShowMobileNav = () => {
    document.querySelector('.c-modal-menu')?.classList.add('closed');
    setTimeout(() => {
      setShowMobileNav((oldState) => !oldState);
    }, 350);
  };

  const provider = {
    showMobileNav,
    toggleShowMobileNav,
  };

  return (
    <MenuContext.Provider value={provider}>{children}</MenuContext.Provider>
  );
}
