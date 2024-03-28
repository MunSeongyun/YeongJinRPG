# 깃허브 명령어 정리

## 작업폴더에서 git 쓰기 
- git add 파일명 
- git commit -m '아무메세지' // 변경후 제목 
- git add 파일명1 파일명2 // 여러파일 동시 저장
- git add . // 모든파일 저장 
- git status // 상태창! 

## branch 빵만들기 
- git branch 브랜치이름 
- git switch 브랜치이름 
  - git status로 상태확인 하깅 

### branch 메인에 합치기 
- git switch main // 메인으로 돌아오기 
- git merge 브랜치명 

# 깃허브에 올리기 
- git push -u 원격저장소주소 main
 
- 원격저장소주소 입력 귀찮을때 
  - git remote add origin 원격저장소주소 
- 저장됬다면 git push만 입력 

## 깃허브에서 내려받기 
- git clone 원격저장주소 

### 주의점 원격 vs 로컬 내용이 다르면 push못함
- git pull 원격저장주소 
  - 원격에있는거랑 로컬 합치라는 소리 
  - 