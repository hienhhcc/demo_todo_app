import { StyledNavigationItem } from './styles';

interface Props {
  to: any;
  children: React.ReactChild;
}

const NavigationItem = ({ children, ...props }: Props) => {
  return <StyledNavigationItem {...props}>{children}</StyledNavigationItem>;
};

export default NavigationItem;
