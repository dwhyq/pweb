import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({ to, children, size = 'md', variant = 'full', className = '', ...rest }) => {
  const getSize = () => {
    switch (size) {
      case 'xs':
        return 'px-[7px] h-10';
      case 'sm':
        return 'px-2 h-10';
      case 'md':
        return 'px-[50px] h-12';
      case 'lg':
        return 'px-[80px] h-14';
      case 'fill':
        return 'w-[100%] h-14';
      default:
        return 'p-1 h-10';
    }
  };

  const ButtonComponent = () => (
    <button
      className={`${getSize()} ${
        variant === 'full' ? 'bg-black text-white max-w-[800px]' : 'bg-red-500 text-white'
      } ${className}  rounded-[4px] px-5 py-2 font-['Montserrat'] font-[600]`}
      {...rest}
    >
      {children}
    </button>
  );

  const RenderedButton = to !== undefined ? (
    <Link to={to} component={ButtonComponent} />
  ) : (
    <ButtonComponent />
  );

  return RenderedButton;
};

Button.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'fill']),
  variant: PropTypes.oneOf(['full']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset', 'download']),
};

export default Button;
