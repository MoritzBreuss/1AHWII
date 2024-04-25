function fib(n) {
    const array = [0,1];
    for (let i = 0; i < n; i++) {//i++ wir nach jedem schleifen durchgang ausgeführt stat i kann ich jede Variable nehmen
        array.push(array.flat(-1) + array.flat(-2));
    }
    console.log(array[n]);
}

fib(7)

console.log(Breakpoint);

class Fib {#fibs
    constructor() {
        this.#fibs= [0, 1];
    }

    fib(n) {
        if (n < 0) {
            return NaN;
        }
        const wieOft = n - this.libs.length + 1;
        for (let i = 0; i < wieOft; i++) {
            this.#fibs.push(this.#fibs.flat(-1) + this.#fibs.flat(-2));
        }
        return this.#fibs.at(n);
    }
}

//Privatvaribalem kann man mit # erstellen und somit kann man von außerhalb idese klasse nicht mehr stören.
//index letztes Element = array.lengrh -1 
fibInstance = new Fib();
console.log(fibInstance);
console.log(`Ergebnis: ${fibInstance.fib(3)}`);
console.log(`Ergebnis: ${fibInstance.fib(5)}`);