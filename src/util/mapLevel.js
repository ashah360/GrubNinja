export default level => {
  switch (level) {
    case '1':
      return 'Baby';
    case '2':
      return 'Teen';
    case '3':
      return 'Adult';
    case '4':
      return 'Ancient';
    case '5':
      return 'Epic';
    case '6':
      return 'Mega';
    case '7':
      return 'Ultra';
    default:
      return 'Baby';
  }
};
