export type Routes = {
  [key: string]: {
    id: string;
    path: string;
    name: string;
    isPublic: boolean;
    exact: boolean;
    isStatic: boolean;
    isRestricted: boolean;
    element: React.FC;
  };
};
