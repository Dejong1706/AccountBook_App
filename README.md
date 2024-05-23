# MMY(거래내역 기입 앱 애플리케이션)

<img src="https://github.com/Team-Cares/Web_Chatting/assets/75114974/671c01df-6485-4003-8bc4-e8e4955d0b99" width="300" height="300"/>

현재는 안드로이드용 APK파일로만 만들어둔 상태입니다. 추후 IOS버전까지 확인후 앱스토어에 배포 테스트를 해볼 예정입니다.
- 다운로드 URL : https://expo.dev/accounts/ppk0320/projects/MMY/builds/3b9649bc-1bf9-47de-a6b6-34f32d8aa35f

## 영상
<img src="https://github.com/Team-Cares/Web_Chatting/assets/75114974/9d367918-2b69-4a78-b3ba-97facc7c511e" width="300" height="500">

<br>

## 프로젝트 소개

- 해당 프로젝트는 react-native로 앱 애플리케이션을 제작해보기 위한 프로젝트입니다.
- 메인 스크린에서는 거래내역이 없을때, 쓴 금액이 많을때, 얻은 금액이 많을때 총 3가지의 상태가 존재합니다.
- 최근 일주일 지출내역은 오늘을 기준으로 이전 6일전 까지의 거래내역데이터를 불러옵니다.
- 전체 거래 내역은 모든 거래 내역을 불러오며, 특정 날짜를 필터링하여 확인할 수 있습니다.

<br>

## 팀원 구성

<div align="center">

| **박병근** |
| :------: |
| [<img src="https://github.com/Dejong1706/MyBlog/assets/75114974/dc9fa281-1359-4c2c-866b-f426b258ee0a" height=150 width=150> <br/> @Dejong1706](https://github.com/Dejong1706) |
</div>

<br>

## 1. 개발 환경

- Front : React-Native, expo, Javascript
- Back-end : Firebase
- 버전 및 이슈관리 : Github
 
<br>

## 2. 역할 분담

### 🍊박병근

- **UI**
    - UI/UX 디자인
    - 페이지 : 메인 스크린, 최근 일주일 거래내역 페이지, 모든 거래내역 페이지, 새로운 거래내역 생성/수정 페이지
- **기능**
    - 거래내역에 대한 CRUD 기능, 날짜 필터링 기능

<br>

## 3. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024.05.06 ~ 05.22

<br>

### 작업 관리

- 혼자 작업을 했기에 필수기능들과 추가적인 기능들을 따로 분류하여 개발을 진행하며 git을 통해 관리를 진행하였습니다.

<br>

## 4. 페이지별 기능

### [메인 스크린]
- 앱 시작시 등장하는 스크린입니다.
- 내역 데이터가 없을때와, 현재 월의 쓴 소비금액이 많을때, 벌은 금액이 많을 떄의 화면으로 나뉘어 집니다.

| 거래내역 X | 쓴 금액이 많을 때| 얻은 금액이 많을 때|
|----------|----------|----------|
|![데이터없음](https://github.com/Team-Cares/Web_Chatting/assets/75114974/8272431a-9539-4a89-819c-54bd80ea7cc0)|![번돈 적음](https://github.com/Team-Cares/Web_Chatting/assets/75114974/90142958-d2a0-4629-8102-9f1b9b868d46)|![번돈 많음](https://github.com/Team-Cares/Web_Chatting/assets/75114974/7868af0f-8469-44b0-9501-6963c3df69a3)|

<br>

### [최근 거래내역 스크린]
- 거래내역중 오늘을 기준으로 지난 7일간의 거래내역 데이터만을 보여줍니다.
- 데이터가 존재하지 않을 경우 데이터가 없다는 글씨를 보여줍니다.
- 상단의 존재하는 거래 금액을 통해 7일간의 거래 정보를 얻을 수 있습니다.

| 최근 일주일 거래내역 데이터 X | 최근 일주일 거래내역 데이터 O |
|----------|----------|
|![일주일 거래X](https://github.com/Team-Cares/Web_Chatting/assets/75114974/ad7f00b2-1d57-470a-bb38-3a40d3e59da3)|![일주일 거래O](https://github.com/Team-Cares/Web_Chatting/assets/75114974/ca6b1927-8c23-48ed-8484-50ea7ec55d75)|

### [전체 거래내역 스크린]
- 모든 거래내역을 보여줍니다.
- 최근 거래내역과 같이 데이터가 없을 경우 데이터가 없다는 문구를 보여줍니다.
- 거래내역이 많을 수 있기에 특정 날짜를 선택하여 볼 수 있는 기능을 넣었습니다.

| 전체 거래내역 | 전체 거래내역 날짜 필터 |
|----------|----------|
|![모든 거래내역](https://github.com/Team-Cares/Web_Chatting/assets/75114974/a9b208ce-dc2d-4773-857e-805391de6adb)|![모든 거래내역 날짜필터](https://github.com/Team-Cares/Web_Chatting/assets/75114974/0e57f23c-1c7f-4f96-8f38-7dff4bee8794)|

<br>

### [거래내역 관리 스크린]
- 상단의 + 버튼을 클릭하면 거래내역 추가 스크린으로, 거래내역을 클릭하면 거래내역 수정 스크린으로 이동합니다.
- 입력 폼 중 하나라도 미 입력시 사용자에게 입력 폼 재확인에 대한 문구가 표시됩니다.

| 거래내역 추가 | 거래내역 수정 | 유효성 검사 |
|----------|----------|----------|
|![거래내역추가](https://github.com/Team-Cares/Web_Chatting/assets/75114974/c57c25ba-3489-4305-b7b6-fc0e26967223)|![거래내역 수정](https://github.com/Team-Cares/Web_Chatting/assets/75114974/ff33f0bc-81bc-48c3-9e49-6eb694479ca7)|![저장취소](https://github.com/Team-Cares/Web_Chatting/assets/75114974/45572f9f-8f69-46a0-9cac-46103f6c82ae)|

<br>

## 5. 개선 목표

- 더 세부적인 표현과 기능들로 인한 UX개선을 진행하면 좋을 것 같습니다.
- 큰 기능들과 세부적인 기능들이 개선되었다면 앱 스토어에 배포를 하게된다면 좋은 경험이 될 것 같습니다.
    



