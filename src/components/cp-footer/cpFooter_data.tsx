const getFooterData = () => {
    const footerData = [
      {
        label: "News",
        url: "#",
        subMenu: [
          {
            label: "Home Page",
            url: "#",          
          },
          {
            label: "U.S",
            url: "#",
          },
          {
            label: "world",
            url: "#",
          },
        ],
      },
      {
        label: "Arts",
        url: "#",
        subMenu: [
          {
            label: "Books",
            url: "#",
          },
          {
            label: "Best Seller Book list",
            url: "#",
          },
          {
            label: "Dance",
            url: "#",
          },
          {
            label: "Movies",
            url: "#",
          },
        ],
      },
      
      {
        label: "LIFESTYLE",
        url: "#",
        subMenu: [
          {
            label: "Health",
            url: "#",
          },
          {
            label: "Well",
            url: "#",
          },
          {
            label: "Food",
            url: "#",
          },
          {
            label: "Travel",
            url: "#",
          },
        ],
      },

     ];
    return footerData;
  };
  
  
  export { getFooterData };
  