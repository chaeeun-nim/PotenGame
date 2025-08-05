import localFont from 'next/font/local';

export const theJamsil = localFont({
  src: [
    {
      path: '../../../public/font/thejamsil/The-Jamsil-OTF-1-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/font/thejamsil/The-Jamsil-OTF-2-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/font/thejamsil/The-Jamsil-OTF-3-Regular.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/font/thejamsil/The-Jamsil-OTF-4-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/font/thejamsil/The-Jamsil-OTF-5-Bold.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/font/thejamsil/The-Jamsil-OTF-6-ExtraBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-thejamsil',
  display: 'swap',
});
