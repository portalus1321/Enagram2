import React from 'react';
const commentsData = [
    {
        id: 1,
        pictureUrl: '',
        userName: 'ნინო',
        comment: 'შესანიშნავი ნამუშევარია!'
    },
    {
        id: 2,
        pictureUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
        userName: 'გიორგი',
        comment: 'შენი პროექტები ისეთი მაგარია, ბებიაჩემსაც ვაჩვენე და ახლა 3D დიზაინის სწავლა უნდა.'
    },
    {
        id: 3,
        pictureUrl: '',
        userName: 'თამარი',
        comment: 'დიზაინი და განლაგება ძალიან მომეწონა.'
    },
    {
        id: 4,
        pictureUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        userName: 'ლევანი',
        comment: 'ძალიან კრეატიული და პროფესიონალურია. ასეთი პორტფოლიო ყველას უნდა ჰქონდეს! შენი ნამუშევრები ნამდვილად შთამბეჭდავია და ვფიქრობ, რომ მომავალში კიდევ უფრო მეტ წარმატებას მიაღწევ.'
    },
    {
        id: 5,
        pictureUrl: '',
        userName: 'ეკატერინე',
        comment: 'შენი უნარები გამორჩეულია!'
    },
    {
        id: 6,
        pictureUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
        userName: 'დავით',
        comment: 'ანიმაციები ძალიან გლუვია. 3D ეფექტები თვალს ვერ მოსწყვეტ! განსაკუთრებით მომეწონა, როგორ გამოიყენე ფერები და მოძრაობა, რაც მთლიანად ახალ დონეზე აყვანილ დიზაინს ქმნის.'
    },
    {
        id: 7,
        pictureUrl: '',
        userName: 'მარიამი',
        comment: 'მარტივი სანავიგაციოა.'
    },
    {
        id: 8,
        pictureUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
        userName: 'სანდრო',
        comment: 'ფერების სქემა ძალიან მომწონს. ისეთივე კაშკაშაა, როგორც თბილისი ღამით.'
    },
    {
        id: 9,
        pictureUrl: '',
        userName: 'ანა',
        comment: 'კოდი კარგად დოკუმენტირებულია და ორგანიზებული.'
    },
    {
        id: 10,
        pictureUrl: 'https://randomuser.me/api/portraits/men/77.jpg',
        userName: 'ირაკლი',
        comment: 'მეტი პროექტის ნახვა მინდა! ეს პორტფოლიო ნამდვილი ინსპირაციაა. შენი ნამუშევრები ნამდვილად გამორჩეულია და ვფიქრობ, რომ ბევრ ადამიანს დააინტერესებს.'
    },
    {
        id: 11,
        pictureUrl: '',
        userName: 'სოფო',
        comment: 'საკონტაქტო ფორმა იდეალურად მუშაობს.'
    }
];

const getCommentById = (id) => commentsData.find(c => c.id === id);

const Slcomm = ({ id }) => {
    const commentObj = getCommentById(id);
    if (!commentObj) return null;
    const { pictureUrl, userName, comment } = commentObj;
    return (
        <div style={{            
            alignItems: 'flex-start',
            gap: '12px',
            padding: '12px 0',
            scale: '0.9',
        }}>
            <div className=' relative w-[30px] h-[30px] bg-white rounded-full bg-white/10 rounded-[10px] '>
                <div className="absolute inset-0 flex items-center justify-center">
                  {!pictureUrl && userName ? userName[0].toUpperCase() : ''}
                </div>
                {pictureUrl && (
                    <img
                        src={pictureUrl}
                        alt={userName}
                        className=" absolute w-full h-full rounded-[10px] object-cover"
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                    />
                )}
                <div className=' relative left-[40px] top-1/2 -translate-y-1/2 bg-white/10 w-[93px] rounded-[10px] text-center'>{userName}</div>
            </div>
            <div className='bg-white/10 rounded-[10px] p-2 translate-y-[12px]'>
               
                <div className=' text-white text-[10px]'>{comment}</div>
            </div>
        </div>
    );
};

export { commentsData, getCommentById };
export default Slcomm;

