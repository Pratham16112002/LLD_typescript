
abstract class Component {
    protected parent! : Component | null

    public setParent(parent : Component | null)  {
        this.parent = parent 
    } 

    public getParent() : Component {
        return this.parent
    }


    public add(component : Component) : void { }

    public remove(component : Component) : void {}


    // Ideally every Component is Leaf
    public isComposite() : boolean {
        return false
    }
    public abstract operation() : string;
}

class Leaf extends Component {
    public operation(): string {
        return 'Leaf'
    }
}

class Composite extends Component {
    protected children : Component[] = [] 

    public add(component: Component): void {
       this.children.push(component) 
    }

    public remove(component: Component): void {
        const componentIndex = this.children.indexOf(component) 
        this.children.splice(componentIndex,1)
        component.setParent(null)
    }
    public isComposite(): boolean {
        return true 
    }

    public operation(): string {
        let results = []
        for(const child of this.children ){
            results.push(child.operation())
        }
        return `Branch(${results.join('+')})`
    }
}

export function TestingCompositePattern () {

    const branchroot = new Composite()
    const branchh1 = new Composite() 
    const branchh2 = new Composite()
    const branchh3 = new Composite()
    branchroot.add(branchh1)
    branchroot.add(branchh2)
    branchroot.add(branchh3)


    const hammer = new Leaf()
    branchh1.add(hammer)

    const phone = new Leaf()

    const headphones = new Leaf()

    branchh2.add(phone)
    branchh2.add(headphones)

    const tv = new Leaf()

    branchh3.add(tv)

    console.log(branchroot.operation())


}
