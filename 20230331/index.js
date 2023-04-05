// Class : ES6부터 지원
// class를 사용하면 상속을 지원한다.
// 코드 재 사용률을 더 높일 수 있다.

// 클래스의 생성자 함수
class student{
    // constructor : 클래스의 생성자 함수
    // 생성자 함수를 작성하지 않으면 빈 생성자 함수가 자동으로 생성된다.
    constructor(age, phone, city){
        this.age = age;
        this.phone = phone;
        this.city = city;
    }

    getInfo(){
        return "나이는 " + this.age + " 살임. 핸드폰 번호는 " + this.phone + " 사는 곳은 " + this.city + "임.";
    }
}

let st = new student(30, 30, "서울");
console.log(st);
console.log(st.phone);
console.log(st.getInfo());

class Character{
    constructor(hp, mp, atk){
        this.hp = hp;
        this.mp = mp;
        this.atk = atk;
    }

    getState(){
        return this.hp + this.mp + this.atk;
    }
    // 정적 메소드 : 일반적으로 공용함수를 만들기 위해 사용.
    // 클래스의 인스턴스에서 호출할 수 없음
    // static 메소드는 클래스를 동적할당 할 때마다 생성되지 않는다.
    // 인스턴스를 생성할 때 더 생성되지 않는다.
    static getAtk(n){
        return n.atk;
    }
}

let ca = new Character(100, 100, 100);
console.log(ca);
// 생성한 인스턴스에서 호출하면 안된다.
// console.log(ca.getAtk(1));
console.log(Character.getAtk(ca));

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    // getter, setter : 클래스의 값을 가져오거나 설정할 때 사용하는 메소드
    // 클래스의 값에 접근할 때 직접 변수에 접근하는 형태가 아니라 get과 set을 통한 접근 방법
    // 내부 구조를 캡슐화 하는데 좋다.
    // 전역적으로 데이터가 사용되지 않게 위험성을 방지해준다.
    // 객체 지향형

    get getName(){
        return "제품 이름 : " + this.name;
    }

    set setPrice(price){
        this.price = price;
    }
}

let pr = new Product("갤럭시 노트", 1000000);
console.log(pr);
// getter 확인
console.log(pr.getName);
// setter 확인
pr.setPrice = 2000;
console.log(pr);