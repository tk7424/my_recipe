const CategorySort = () => {
    const content_c = () => {
        const content:any = document.getElementsByClassName('content');
        for(let a=0;a<content.length;a++){content[a].style.display = "none";}

        const tab:any = document.getElementsByClassName('tab');
        for(let a=0;a<tab.length;a++){tab[a].style.backgroundColor = "#a7a7a7";}
    }

    const appetizer = () => {
        content_c();
        const sort:any = document.getElementsByClassName("sort_APPETIZER");
        for(let i=0;i<sort.length;i++){sort[i].style.display = "block";}

        const select:any = document.getElementsByClassName("_APPETIZER");
        for(let i=0;i<select.length;i++){select[i].style.backgroundColor = "#c7f3b0";}
    }
    const main = () => {
        content_c();
        const sort:any = document.getElementsByClassName("sort_MAIN");
        for(let i=0;i<sort.length;i++){sort[i].style.display = "block";}

        const select:any = document.getElementsByClassName("_MAIN");
        for(let i=0;i<select.length;i++){select[i].style.backgroundColor = "#f1a25f";}
    }
    const desert = () => {
        content_c();
        const sort:any = document.getElementsByClassName("sort_DESERT");
        for(let i=0;i<sort.length;i++){sort[i].style.display = "block";}

        const select:any = document.getElementsByClassName("_DESERT");
        for(let i=0;i<select.length;i++){select[i].style.backgroundColor = "#f797c8";}
    }
    const onedich = () => {
        content_c();
        const sort:any = document.getElementsByClassName("sort_1DISH");
        for(let i=0;i<sort.length;i++){sort[i].style.display = "block";}

        const select:any = document.getElementsByClassName("_1DISH");
        for(let i=0;i<select.length;i++){select[i].style.backgroundColor = "#ffde67";}
    }
    const alonefood = () => {
        content_c();
        const sort:any = document.getElementsByClassName("sort_ALONEFOOD");
        for(let i=0;i<sort.length;i++){sort[i].style.display = "block";}

        const select:any = document.getElementsByClassName("_ALONEFOOD");
        for(let i=0;i<select.length;i++){select[i].style.backgroundColor = "#9dc4ff";}
    }

        return (
            <>
            <div className="categories">
                <div className="_APPETIZER tab" onClick={appetizer}>前菜</div>
                <div className="_MAIN tab" onClick={main}>メイン</div>
                <div className="_DESERT tab" onClick={desert}>デザート</div>
                <div className="_1DISH tab" onClick={onedich}>1品料理</div>
                <div className="_ALONEFOOD tab" onClick={alonefood}>一人飯</div>
            </div>
                <style jsx>{`
                .categories {
                    display: flex;
                    justify-content: space-around;
                    margin: 10px 0 5px;
                }
                .categories div {
                    width: calc(100%/5);
                    text-align: center;
                    padding: 7px 0px;
                    font-size: 4.5vw;
                    color: #fff;
                    text-shadow: 1px 1px 1px #947d7d;
                }
                .categories div:hover{cursor: pointer;}
                @media screen and (min-width:800px) {
                    .categories {
                        margin: 30px 15vw;
                    }
                    .categories div {
                        font-size: 1rem;
                    }
                }
                `}</style>
            </>
        )
}

export default CategorySort