const getHeaderData = () => {
    const headerData = [
      {
        label: "Home",
        url: "#",
        subMenu: [
          {
            label: "Sign In",
            url: "#",          
          },
        ],
      },
      {
        label: "Article",
        url: "#",
        // subMenu: [
        //   {
        //     label: "Indian Wear",
        //     url: "#",          
        //   },
        //   {
        //     label: "Indian Wear",
        //     url: "#",          
        //   },
        // ],
      },
      {
        label: "Contact",
        url: "#",
        // subMenu: [
        //   {
        //     label: "Indian Wear",
        //     url: "#",          
        //   },
        //   {
        //     label: "Indian Wear",
        //     url: "#",          
        //   },
        // ],
      },
      
     ];
    return headerData;
  };
  
  
  export { getHeaderData };
  