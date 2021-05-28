# Architectural Decision Records


#### 이슈: sns(커뮤니티) 기능 구현

* 결정:  
> 1. 오픈소스를 사용해서 구현  
> > <https://github.com/jeonghunn/Favorite-Android-Client> 클라이언트 오픈소스 
> 2. 백엔드(서버), 데이터베이스는 Firebase


* 전제: 댓글, 추천, 스크랩, 채팅이 가능해야 함 
* 고려 : 찾은 오픈소스 코드가 오래된 코드라 호환이 되지 않을 수 있음 그럴 경우 firebase를 사용해 자체적으로 구현하기
