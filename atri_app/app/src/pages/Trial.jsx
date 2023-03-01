import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex203Cb, useFlex200Cb, useFlex191Cb, useFlex189Cb, useFlex190Cb, useFlex188Cb, useFlex192Cb, useFlex201Cb, useFlex193Cb, useFlex194Cb, useFlex195Cb, useFlex196Cb, useFlex197Cb, useFlex202Cb, useFlex198Cb, useFlex199Cb, useImage182Cb, useTextBox178Cb, useTextBox174Cb, useImage175Cb, useTextBox179Cb, useButton5Cb, useImage176Cb, useImage177Cb, useImage178Cb, useTextBox180Cb, useImage179Cb, useTextBox181Cb, useImage180Cb, useTextBox182Cb, useImage181Cb, useTextBox183Cb, useTextBox184Cb, useTextBox185Cb, useInput4Cb } from "../page-cbs/trial";
import "../page-css/trial.css";
import "../custom/trial";

export default function Trial() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex203Props = useStore((state)=>state["trial"]["Flex203"]);
const Flex203IoProps = useIoStore((state)=>state["trial"]["Flex203"]);
const Flex203Cb = useFlex203Cb()
const Flex200Props = useStore((state)=>state["trial"]["Flex200"]);
const Flex200IoProps = useIoStore((state)=>state["trial"]["Flex200"]);
const Flex200Cb = useFlex200Cb()
const Flex191Props = useStore((state)=>state["trial"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["trial"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex189Props = useStore((state)=>state["trial"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["trial"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex190Props = useStore((state)=>state["trial"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["trial"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex188Props = useStore((state)=>state["trial"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["trial"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex192Props = useStore((state)=>state["trial"]["Flex192"]);
const Flex192IoProps = useIoStore((state)=>state["trial"]["Flex192"]);
const Flex192Cb = useFlex192Cb()
const Flex201Props = useStore((state)=>state["trial"]["Flex201"]);
const Flex201IoProps = useIoStore((state)=>state["trial"]["Flex201"]);
const Flex201Cb = useFlex201Cb()
const Flex193Props = useStore((state)=>state["trial"]["Flex193"]);
const Flex193IoProps = useIoStore((state)=>state["trial"]["Flex193"]);
const Flex193Cb = useFlex193Cb()
const Flex194Props = useStore((state)=>state["trial"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["trial"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex195Props = useStore((state)=>state["trial"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["trial"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex196Props = useStore((state)=>state["trial"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["trial"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex197Props = useStore((state)=>state["trial"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["trial"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex202Props = useStore((state)=>state["trial"]["Flex202"]);
const Flex202IoProps = useIoStore((state)=>state["trial"]["Flex202"]);
const Flex202Cb = useFlex202Cb()
const Flex198Props = useStore((state)=>state["trial"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["trial"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex199Props = useStore((state)=>state["trial"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["trial"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Image182Props = useStore((state)=>state["trial"]["Image182"]);
const Image182IoProps = useIoStore((state)=>state["trial"]["Image182"]);
const Image182Cb = useImage182Cb()
const TextBox178Props = useStore((state)=>state["trial"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["trial"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox174Props = useStore((state)=>state["trial"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["trial"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const Image175Props = useStore((state)=>state["trial"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["trial"]["Image175"]);
const Image175Cb = useImage175Cb()
const TextBox179Props = useStore((state)=>state["trial"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["trial"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Button5Props = useStore((state)=>state["trial"]["Button5"]);
const Button5IoProps = useIoStore((state)=>state["trial"]["Button5"]);
const Button5Cb = useButton5Cb()
const Image176Props = useStore((state)=>state["trial"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["trial"]["Image176"]);
const Image176Cb = useImage176Cb()
const Image177Props = useStore((state)=>state["trial"]["Image177"]);
const Image177IoProps = useIoStore((state)=>state["trial"]["Image177"]);
const Image177Cb = useImage177Cb()
const Image178Props = useStore((state)=>state["trial"]["Image178"]);
const Image178IoProps = useIoStore((state)=>state["trial"]["Image178"]);
const Image178Cb = useImage178Cb()
const TextBox180Props = useStore((state)=>state["trial"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["trial"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const Image179Props = useStore((state)=>state["trial"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["trial"]["Image179"]);
const Image179Cb = useImage179Cb()
const TextBox181Props = useStore((state)=>state["trial"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["trial"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const Image180Props = useStore((state)=>state["trial"]["Image180"]);
const Image180IoProps = useIoStore((state)=>state["trial"]["Image180"]);
const Image180Cb = useImage180Cb()
const TextBox182Props = useStore((state)=>state["trial"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["trial"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Image181Props = useStore((state)=>state["trial"]["Image181"]);
const Image181IoProps = useIoStore((state)=>state["trial"]["Image181"]);
const Image181Cb = useImage181Cb()
const TextBox183Props = useStore((state)=>state["trial"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["trial"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const TextBox184Props = useStore((state)=>state["trial"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["trial"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const TextBox185Props = useStore((state)=>state["trial"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["trial"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const Input4Props = useStore((state)=>state["trial"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["trial"]["Input4"]);
const Input4Cb = useInput4Cb()

  return (<>
  <Flex2 className="p-trial Flex203 bpt" {...Flex203Props} {...Flex203Cb} {...Flex203IoProps}>
<Flex2 className="p-trial Flex201 bpt" {...Flex201Props} {...Flex201Cb} {...Flex201IoProps}>
<Flex2 className="p-trial Flex193 bpt" {...Flex193Props} {...Flex193Cb} {...Flex193IoProps}>
<Image2 className="p-trial Image177 bpt" {...Image177Props} {...Image177Cb} {...Image177IoProps}/>
<Image2 className="p-trial Image176 bpt" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
</Flex2>
<Flex2 className="p-trial Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Image2 className="p-trial Image178 bpt" {...Image178Props} {...Image178Cb} {...Image178IoProps}/>
<TextBox2 className="p-trial TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
</Flex2>
<Flex2 className="p-trial Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Image2 className="p-trial Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
<TextBox2 className="p-trial TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Flex2>
<Flex2 className="p-trial Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Image2 className="p-trial Image180 bpt" {...Image180Props} {...Image180Cb} {...Image180IoProps}/>
<TextBox2 className="p-trial TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
</Flex2>
<Button2 className="p-trial Button5 bpt" {...Button5Props} {...Button5Cb} {...Button5IoProps}/>
<Flex2 className="p-trial Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Image2 className="p-trial Image181 bpt" {...Image181Props} {...Image181Cb} {...Image181IoProps}/>
<TextBox2 className="p-trial TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-trial Flex202 bpt" {...Flex202Props} {...Flex202Cb} {...Flex202IoProps}>
<Flex2 className="p-trial Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<TextBox2 className="p-trial TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<TextBox2 className="p-trial TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
</Flex2>
<Flex2 className="p-trial Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Input2 className="p-trial Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-trial Flex200 bpt" {...Flex200Props} {...Flex200Cb} {...Flex200IoProps}>
<Flex2 className="p-trial Flex192 bpt" {...Flex192Props} {...Flex192Cb} {...Flex192IoProps}>
<TextBox2 className="p-trial TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex2>
<Flex2 className="p-trial Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<Flex2 className="p-trial Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<Flex2 className="p-trial Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Image2 className="p-trial Image175 bpt" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
<TextBox2 className="p-trial TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-trial Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox2 className="p-trial TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex2>
<Image2 className="p-trial Image182 bpt" {...Image182Props} {...Image182Cb} {...Image182IoProps}/>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
