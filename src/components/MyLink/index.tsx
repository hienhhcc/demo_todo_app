import { StyledLink } from './styles';

interface Props {
  children: React.ReactChild;
  to: any;
}

const MyLink = ({ children, ...props }: Props) => {
  return <StyledLink {...props}>{children}</StyledLink>;
};

export default MyLink;
