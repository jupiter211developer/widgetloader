(() => {
    
    const script = document.currentScript;
    const userid = script.getAttribute("data-userid");
    const loadButton = () => {

        const button = document.createElement("button");

        const buttonStyle = button.style;
        buttonStyle.position = "fixed";
        buttonStyle.right = "40px";
        buttonStyle.bottom = "20px";
        buttonStyle.width = "60px";
        buttonStyle.height = "60px";
        buttonStyle.backgroundImage = "url(https://cdn0.iconfinder.com/data/icons/social-24/96/Chat-512.png)";
        buttonStyle.backgroundSize = 'cover';
        buttonStyle.border = 'none';
        buttonStyle.backgroundColor = 'transparent';
        buttonStyle.borderRadius = "50%";
        button.onclick = () => {
            const iframe = document.getElementById('iframe');
            const show = iframe.getAttribute('show');
            const style = iframe.style;
            if (!show) {
                iframe.setAttribute('show', 'true');
                style.opacity = 1;
            } else {
                iframe.setAttribute('show', '');
                style.opacity = 0;
            }
        }

        document.body.appendChild(button);
    }
    const loadWidget = () => {
        
        const widget= document.createElement("div");
        widget.id = 'iframe';
        
        const widgetStyle = widget.style;
        // widgetStyle.display = "none";
        widgetStyle.opacity = 0;
        widgetStyle.transition = 'all .5s';
        widgetStyle.boxSizing = "border-box";
        widgetStyle.width = "400px";
        widgetStyle.height = "647px";
        widgetStyle.position = "fixed";
        widgetStyle.bottom = "100px";
        widgetStyle.right = "40px";
        const iframe = document.createElement("iframe");
        
        const iframeStyle = iframe.style;
        iframeStyle.boxSizing = "borderBox";
        iframeStyle.position = "absolute";
        iframeStyle.right = 0;
        iframeStyle.top = 0;
        iframeStyle.width = "100%";
        iframeStyle.height = "100%";
        iframeStyle.border = 0;
        iframeStyle.margin = 0;
        iframeStyle.padding = 0;
        iframeStyle.width = "500px";

        widget.appendChild(iframe);
        
        // iframe.addEventListener("load", () => widgetStyle.display = "block" );
        
        const widgetUrl = `https://thriving-clafoutis-22f6ba.netlify.app?userid=${userid}`;
        
        iframe.src = widgetUrl;

        document.body.appendChild(widget);
        
    }
    
    if ( document.readyState === "complete" ) {
        loadWidget();
        loadButton();
       
    } else {
        document.addEventListener("readystatechange", () => {
            if ( document.readyState === "complete" ) {
                loadWidget();
                loadButton();
            }
        });
    }
   
})();
