export interface User{
    id: number,
    email: string,
    username: string,
    password: string,
    points: number
}
export interface Question{
    id : number,
    topic: string,
    time: number,
    points: number,
    level: number,
    questionItem: Answer<ItemAnswer>[],
}
export interface ItemAnswer{
    name: string,
    key: number,
}

export interface Answer<Type>{
    id: number,
    topic: string,
    listItem: Type[],
    keyRight: number,
}

export const users: User[] = [
    { id : 1, email: 'user1@gmail.com', username: 'user1', password: '123' , points: 0},
    { id : 2, email: 'user2@gmail.com', username: 'user2', password: '123' , points: 1},
    { id : 3, email: 'user3@gmail.com', username: 'user3', password: '123' , points: 454},
    { id : 4, email: 'user4@gmail.com', username: 'user4', password: '123' , points: 22},
    { id : 5, email: 'user5@gmail.com', username: 'user5', password: '123' , points: 12},
    { id : 6, email: 'user6@gmail.com', username: 'user6', password: '123' , points: 0},
    { id : 7, email: 'user7@gmail.com', username: 'user7', password: '123' , points: 32},
    { id : 8, email: 'user8@gmail.com', username: 'user8', password: '123' , points: 0},
]

const itemQuestion: Answer<ItemAnswer>[] = 
     [{
        id: 1,
        topic: "Câu 1. Nhân viên chính thức của công ty Amela được nghỉ phép (có hưởng lương) bao nhiêu ngày một năm?",
        listItem: [
            {
                name: "A. 12 ngày nếu làm đủ cả năm",
                key: 0
            },
            {
                name: "B. 16 ngày nếu làm đủ cả năm",
                key: 1
            },
            {
                name: "C. Không có nghỉ phép vẫn hưởng lương",
                key: 2
            },
            {
                name: "D. 8 ngày nếu làm đủ cả năm",
                key: 3
            }
        ],
        keyRight: 2
    },
    {
        id: 2,
        topic: "Câu 2. ...",
        listItem: [
            {
                name: "A. 12 ngày nếu làm đủ cả năm",
                key: 0
            },
            {
                name: "B. 16 ngày nếu làm đủ cả năm",
                key: 1
            },
            {
                name: "C. Không có nghỉ phép vẫn hưởng lương",
                key: 2
            },
            {
                name: "D. 8 ngày nếu làm đủ cả năm",
                key: 3
            }
        ],
        keyRight: 2
    },
    {
        id: 3,
        topic: "Câu 3. ...",
        listItem: [
            {
                name: "A. 12 ngày nếu làm đủ cả năm",
                key: 0
            },
            {
                name: "B. 16 ngày nếu làm đủ cả năm",
                key: 1
            },
            {
                name: "C. Không có nghỉ phép vẫn hưởng lương",
                key: 2
            },
            {
                name: "D. 8 ngày nếu làm đủ cả năm",
                key: 3
            }
        ],
        keyRight: 2
    },
    {
        id: 4,
        topic: "Câu 4. ...",
        listItem: [
            {
                name: "A. 12 ngày nếu làm đủ cả năm",
                key: 0
            },
            {
                name: "B. 16 ngày nếu làm đủ cả năm",
                key: 1
            },
            {
                name: "C. Không có nghỉ phép vẫn hưởng lương",
                key: 2
            },
            {
                name: "D. 8 ngày nếu làm đủ cả năm",
                key: 3
            }
        ],
        keyRight: 2
    },
    {
        id: 5,
        topic: "Câu 5. ...",
        listItem: [
            {
                name: "A. 12 ngày nếu làm đủ cả năm",
                key: 0
            },
            {
                name: "B. 16 ngày nếu làm đủ cả năm",
                key: 1
            },
            {
                name: "C. Không có nghỉ phép vẫn hưởng lương",
                key: 2
            },
            {
                name: "D. 8 ngày nếu làm đủ cả năm",
                key: 3
            }
        ],
        keyRight: 2
    }];

export const questions: Question[] = [
    { id: 1 ,topic : 'Kiểm tra bảo mật thông tin', time : 7 , points : 200 , level: 3, questionItem: itemQuestion},
    { id: 2 ,topic : 'Kiểm tra bảo mật thông tin 2', time : 12 , points : 200 , level: 4, questionItem: itemQuestion},
    { id: 3 ,topic : 'Kiến thức react basic', time : 7 , points : 20 , level: 1, questionItem: itemQuestion},
    { id: 4 ,topic : 'Kiến thức react advanced', time : 13 , points : 200 , level: 4, questionItem: itemQuestion},
    { id: 5 ,topic : 'Lập trình Nodejs', time : 7 , points : 200 , level: 3, questionItem: itemQuestion},
    { id: 6 ,topic : 'Unit test cơ bản', time : 7 , points : 100 , level: 2, questionItem: itemQuestion},
    { id: 7 ,topic : 'Authentication & authorization trong nodejs', time : 17 , points : 200 , level: 4, questionItem: itemQuestion},
    { id: 8 ,topic : 'Lập trình cơ bản', time : 4 , points : 20 , level: 0, questionItem: itemQuestion},
    { id: 9 ,topic : 'An toàn và bảo mật thông tin', time : 7 , points : 200 , level: 3, questionItem: itemQuestion},
    { id: 10 ,topic : 'Tổng quan về state management', time : 14 , points : 50 , level: 1, questionItem: itemQuestion},
    { id: 11,topic : 'Tìm hiểu về flux, redux', time : 6 , points : 200 , level: 2, questionItem: itemQuestion},
    { id: 12 ,topic : 'Responsive trong lập trình web', time : 17 , points : 250 , level: 3, questionItem: itemQuestion},
    { id: 13 ,topic : 'Tìm hiểu về storage', time : 7 , points : 200 , level: 0, questionItem: itemQuestion},

]

