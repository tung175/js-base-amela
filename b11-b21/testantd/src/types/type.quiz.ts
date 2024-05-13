export interface IManageQuiz {
    key: string;
    stt: number;
    testName: string;
    time: string;
    start: number;
  }

export interface IListTopic {
  key: string
  stt: number;
  topicName: string;
  difficult: string;
}

export interface IUserData {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  image: string;
  lastName: string;
  token: string;
  username: string;
}

export interface AccessTokenResponse {
  token: string;
}

export interface IStateRedux {
  userAcc: {
    username: string;
    auth: boolean;
    token: string;
  };
  isLoading: boolean;
  isError: boolean;
}

export interface Profile {
  preview: string;
}