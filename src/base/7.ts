interface IDetails {
  createAt: Date;
  updateAt: Date;
}

interface IPageInfo {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: IDetails;
}

const page1: IPageInfo = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

console.log(page1);

const page2: IPageInfo = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
console.log(page2);