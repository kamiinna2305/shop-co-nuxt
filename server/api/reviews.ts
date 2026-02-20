// server/api/reviews.ts
export default defineEventHandler((event) => {
  const reviewsData = {
    1: [ // Отзывы для товара с id: 1
      { id: 1, user: 'Samantha D.', rating: 5, date: 'August 14, 2023', comment: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable.' },
      { id: 1, user: 'Alex M.', rating: 4, date: 'August 16, 2023', comment: 'Great quality, but the size runs a bit large.' }
    ],
    2: [ // Отзывы для товара с id: 2
      { id: 2, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 2, user: 'Ethan R.', rating: 3.5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 2, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' }
    ],
    3: [ // Отзывы для товара с id: 3
      { id: 3, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 3, user: 'Ethan R.', rating: 3, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 3, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 3, user: 'Ethan R.', rating: 4, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 3, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' }
    ],
    4: [ // Отзывы для товара с id: 4
      { id: 4, user: 'Ethan R.', rating: 4.5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' }
    ],
    5: [ // Отзывы для товара с id: 5
      { id: 5, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 5, user: 'Ethan R.', rating: 3, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 5, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 5, user: 'Ethan R.', rating: 4.5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' },
      { id: 5, user: 'Ethan R.', rating: 5, date: 'September 5, 2023', comment: 'Perfect fit and amazing material!' }
    ]
    // И так далее...
  }
  return reviewsData
})