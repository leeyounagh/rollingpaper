import HomePageIcon from '@/assets/Icon_b.png'
const { VITE_APP_KAKAO_JAVASCRIPT_KEY } = import.meta.env

export const shareKaKaoLink = ({ title, route }: { title: string; route: string }) => {
  console.log("title",title,route)
  if (window.Kakao) {
    const kakao = window.Kakao
    console.log('afdadfsss')
    // 중복 initialization 방지
    if (!kakao.isInitialized()) {
      // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
      kakao.init(VITE_APP_KAKAO_JAVASCRIPT_KEY)
    }

    return kakao.Link.createDefaultButton({
      // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: title,
        description: '설맞이 친구들과 덕담을 나눌수 있는 사이트 입니다.',
        imageUrl: HomePageIcon,
        link: {
          mobileWebUrl: route,
          webUrl: route,
        },
      },
      buttons: [
        {
          title: title,
          link: {
            mobileWebUrl: route,
            webUrl: route,
          },
        },
      ],
    })
  }
}
