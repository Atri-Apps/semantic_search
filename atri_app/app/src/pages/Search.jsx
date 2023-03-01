import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex156Cb, useFlex154Cb, useFlex145Cb, useFlex146Cb, useFlex155Cb, useFlex147Cb, useFlex148Cb, useFlex149Cb, useFlex150Cb, useFlex151Cb, useFlex181Cb, useFlex182Cb, useFlex183Cb, useFlex173Cb, useFlex174Cb, useFlex178Cb, useFlex179Cb, useFlex184Cb, useFlex180Cb, useFlex204Cb, useInput3Cb, useTextBox139Cb, useTextBox140Cb, useButton4Cb, useTextBox141Cb, useImage153Cb, useTextBox142Cb, useImage154Cb, useTextBox143Cb, useImage155Cb, useTextBox144Cb, useImage156Cb, useImage157Cb, useImage158Cb, useTextBox168Cb, useImage167Cb, useTextBox156Cb, useTextBox162Cb, useImage169Cb, useTextBox163Cb, useImage170Cb, useImage171Cb, useTextBox169Cb, useTextBox164Cb, useTextBox165Cb, useTextBox166Cb, useTextBox170Cb, useImage183Cb, useImage191Cb, useImage192Cb, useImage193Cb } from "../page-cbs/search";
import "../page-css/search.css";
import "../custom/search";

export default function Search() {
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

  const Flex156Props = useStore((state)=>state["search"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["search"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex154Props = useStore((state)=>state["search"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["search"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const Flex145Props = useStore((state)=>state["search"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["search"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["search"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["search"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex155Props = useStore((state)=>state["search"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["search"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex147Props = useStore((state)=>state["search"]["Flex147"]);
const Flex147IoProps = useIoStore((state)=>state["search"]["Flex147"]);
const Flex147Cb = useFlex147Cb()
const Flex148Props = useStore((state)=>state["search"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["search"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["search"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["search"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex150Props = useStore((state)=>state["search"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["search"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Flex151Props = useStore((state)=>state["search"]["Flex151"]);
const Flex151IoProps = useIoStore((state)=>state["search"]["Flex151"]);
const Flex151Cb = useFlex151Cb()
const Flex181Props = useStore((state)=>state["search"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["search"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex182Props = useStore((state)=>state["search"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["search"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex183Props = useStore((state)=>state["search"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["search"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex173Props = useStore((state)=>state["search"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["search"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex174Props = useStore((state)=>state["search"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["search"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex178Props = useStore((state)=>state["search"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["search"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex179Props = useStore((state)=>state["search"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["search"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex184Props = useStore((state)=>state["search"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["search"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex180Props = useStore((state)=>state["search"]["Flex180"]);
const Flex180IoProps = useIoStore((state)=>state["search"]["Flex180"]);
const Flex180Cb = useFlex180Cb()
const Flex204Props = useStore((state)=>state["search"]["Flex204"]);
const Flex204IoProps = useIoStore((state)=>state["search"]["Flex204"]);
const Flex204Cb = useFlex204Cb()
const Input3Props = useStore((state)=>state["search"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["search"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox139Props = useStore((state)=>state["search"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["search"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox140Props = useStore((state)=>state["search"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["search"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const Button4Props = useStore((state)=>state["search"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["search"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox141Props = useStore((state)=>state["search"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["search"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const Image153Props = useStore((state)=>state["search"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["search"]["Image153"]);
const Image153Cb = useImage153Cb()
const TextBox142Props = useStore((state)=>state["search"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["search"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Image154Props = useStore((state)=>state["search"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["search"]["Image154"]);
const Image154Cb = useImage154Cb()
const TextBox143Props = useStore((state)=>state["search"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["search"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const Image155Props = useStore((state)=>state["search"]["Image155"]);
const Image155IoProps = useIoStore((state)=>state["search"]["Image155"]);
const Image155Cb = useImage155Cb()
const TextBox144Props = useStore((state)=>state["search"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["search"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Image156Props = useStore((state)=>state["search"]["Image156"]);
const Image156IoProps = useIoStore((state)=>state["search"]["Image156"]);
const Image156Cb = useImage156Cb()
const Image157Props = useStore((state)=>state["search"]["Image157"]);
const Image157IoProps = useIoStore((state)=>state["search"]["Image157"]);
const Image157Cb = useImage157Cb()
const Image158Props = useStore((state)=>state["search"]["Image158"]);
const Image158IoProps = useIoStore((state)=>state["search"]["Image158"]);
const Image158Cb = useImage158Cb()
const TextBox168Props = useStore((state)=>state["search"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["search"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Image167Props = useStore((state)=>state["search"]["Image167"]);
const Image167IoProps = useIoStore((state)=>state["search"]["Image167"]);
const Image167Cb = useImage167Cb()
const TextBox156Props = useStore((state)=>state["search"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["search"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox162Props = useStore((state)=>state["search"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["search"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Image169Props = useStore((state)=>state["search"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["search"]["Image169"]);
const Image169Cb = useImage169Cb()
const TextBox163Props = useStore((state)=>state["search"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["search"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image170Props = useStore((state)=>state["search"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["search"]["Image170"]);
const Image170Cb = useImage170Cb()
const Image171Props = useStore((state)=>state["search"]["Image171"]);
const Image171IoProps = useIoStore((state)=>state["search"]["Image171"]);
const Image171Cb = useImage171Cb()
const TextBox169Props = useStore((state)=>state["search"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["search"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox164Props = useStore((state)=>state["search"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["search"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["search"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["search"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox166Props = useStore((state)=>state["search"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["search"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox170Props = useStore((state)=>state["search"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["search"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image183Props = useStore((state)=>state["search"]["Image183"]);
const Image183IoProps = useIoStore((state)=>state["search"]["Image183"]);
const Image183Cb = useImage183Cb()
const Image191Props = useStore((state)=>state["search"]["Image191"]);
const Image191IoProps = useIoStore((state)=>state["search"]["Image191"]);
const Image191Cb = useImage191Cb()
const Image192Props = useStore((state)=>state["search"]["Image192"]);
const Image192IoProps = useIoStore((state)=>state["search"]["Image192"]);
const Image192Cb = useImage192Cb()
const Image193Props = useStore((state)=>state["search"]["Image193"]);
const Image193IoProps = useIoStore((state)=>state["search"]["Image193"]);
const Image193Cb = useImage193Cb()

  return (<>
  <Flex1 className="p-search Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Flex1 className="p-search Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Flex1 className="p-search Flex151 bpt" {...Flex151Props} {...Flex151Cb} {...Flex151IoProps}>
<Image1 className="p-search Image157 bpt" {...Image157Props} {...Image157Cb} {...Image157IoProps}/>
<Image1 className="p-search Image158 bpt" {...Image158Props} {...Image158Cb} {...Image158IoProps}/>
</Flex1>
<Flex1 className="p-search Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Image1 className="p-search Image156 bpt" {...Image156Props} {...Image156Cb} {...Image156IoProps}/>
<TextBox1 className="p-search TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
</Flex1>
<Flex1 className="p-search Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Image1 className="p-search Image155 bpt" {...Image155Props} {...Image155Cb} {...Image155IoProps}/>
<TextBox1 className="p-search TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Flex1>
<Flex1 className="p-search Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Image1 className="p-search Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
<TextBox1 className="p-search TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
</Flex1>
<Button1 className="p-search Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
<Flex1 className="p-search Flex147 bpt" {...Flex147Props} {...Flex147Cb} {...Flex147IoProps}>
<Image1 className="p-search Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<TextBox1 className="p-search TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-search Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Flex1 className="p-search Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<TextBox1 className="p-search TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<TextBox1 className="p-search TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
</Flex1>
<Flex1 className="p-search Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<Input1 className="p-search Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-search Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<Flex1 className="p-search Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<TextBox1 className="p-search TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex1>
<Flex1 className="p-search Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<Flex1 className="p-search Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<Flex1 className="p-search Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Image1 className="p-search Image167 bpt" {...Image167Props} {...Image167Cb} {...Image167IoProps}/>
<TextBox1 className="p-search TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex1>
<Flex1 className="p-search Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<Image1 className="p-search Image169 bpt" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
<TextBox1 className="p-search TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex1>
<Flex1 className="p-search Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<Image1 className="p-search Image170 bpt" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
<TextBox1 className="p-search TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex1>
<Flex1 className="p-search Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Image1 className="p-search Image171 bpt" {...Image171Props} {...Image171Cb} {...Image171IoProps}/>
<TextBox1 className="p-search TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-search Flex180 bpt" {...Flex180Props} {...Flex180Cb} {...Flex180IoProps}>
<TextBox1 className="p-search TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<TextBox1 className="p-search TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<TextBox1 className="p-search TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<TextBox1 className="p-search TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-search Flex204 bpt" {...Flex204Props} {...Flex204Cb} {...Flex204IoProps}>
<Image1 className="p-search Image183 bpt" {...Image183Props} {...Image183Cb} {...Image183IoProps}/>
<Image1 className="p-search Image191 bpt" {...Image191Props} {...Image191Cb} {...Image191IoProps}/>
<Image1 className="p-search Image192 bpt" {...Image192Props} {...Image192Cb} {...Image192IoProps}/>
<Image1 className="p-search Image193 bpt" {...Image193Props} {...Image193Cb} {...Image193IoProps}/>
</Flex1>
</Flex1>
  </>);
}
