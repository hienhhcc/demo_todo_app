const useHooks = () => {
  const onSubmitRegister = (data: any) => {
    console.log(data);
  };

  return { handlers: { onSubmitRegister }, selectors: {} };
};

export default useHooks;
