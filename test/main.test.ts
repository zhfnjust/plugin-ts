

function assert(cond: boolean) {
    console.log('assert', cond)
}
export class Demo {


    readonly x: bigint;

    y: bigint;

    constructor(x: bigint, y: bigint) {
        this.x = x;
        this.y = y;
    }


    sum(a: bigint, b: bigint): bigint {
        return a + b;
    }


    public add(z: bigint) {
        assert(z == this.sum(this.x, this.y));
    }


    public sub(z: bigint) {
      assert(z == this.x - this.y);
    }
}

let demo = new Demo(1n, 2n);

demo.add(3n)