import { Component } from 'react';

class CodeText extends Component {
    render() {
        return (
            <div className="h-90 w-full lg:h-auto font-geist-mono font-light bg-black rounded-3xl pt-4 px-4 pb-1 text-gray-400 overflow-hidden selection:bg-amber-500 selection:text-black border border-transparent dark:border-gray-900">
        <pre className="leading-relaxed">
          <code className={"font-code text-xs font-light tracking-wide"}>
            <span className="text-amber-300">const</span>{" "}
              <span className="text-teal-500">PaymentCardBlock</span> = () =&gt; (<br />

              &nbsp;&nbsp;<span className="text-amber-300">&lt;Div</span>{" "}
              <span className="text-orange-600">bg</span>=
            <span className="text-emerald-400">"white"</span>{" "}
              <span className="text-orange-600">shadow</span>=
            <span className="text-emerald-400">"2"</span>{" "}
              <span className="text-orange-600">rounded</span>=
            <span className="text-emerald-400">"xl"</span>{" "}
              <span className="text-orange-600">m</span>=
              {"{"}{"{"}
              <span className="text-amber-300">b</span>:{" "}
              <span className="text-emerald-400">"1rem"</span>
              {"}"}{"}"}{" "}
              <span className="text-orange-600">p</span>=
            <span className="text-emerald-400">"1.5rem"</span>
            <span className="text-amber-300">&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Div</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600">border</span>=
              {"{"}{"{"}
              <span className="text-amber-300">b</span>:{" "}
              <span className="text-emerald-400">"1px solid"</span>
              {"}"}{"}"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600">borderColor</span>=
            <span className="text-emerald-400">"gray300"</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600">p</span>=
              {"{"}{"{"}
              <span className="text-amber-300">b</span>:{" "}
              <span className="text-emerald-400">"0.75rem"</span>
              {"}"}{"}"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Text</span>{" "}
              <span className="text-orange-600">textSize</span>=
            <span className="text-emerald-400">"title"</span>{" "}
              <span className="text-orange-600">textWeight</span>=
            <span className="text-emerald-400">"500"</span>
            <span className="text-amber-300">&gt;</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$<span className="text-pink-700">1,410.16</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;/Text&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Text</span>{" "}
              <span className="text-orange-600">textSize</span>=
            <span className="text-emerald-400">"caption"</span>{" "}
              <span className="text-orange-600">textColor</span>=
            <span className="text-emerald-400">"light"</span>
            <span className="text-amber-300">&gt;</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;per month<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;/Text&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;/Div&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Div</span>{" "}
              <span className="text-orange-600">d</span>=
            <span className="text-emerald-400">"flex"</span>{" "}
              <span className="text-orange-600">justify</span>=
            <span className="text-emerald-400">"space-between"</span>{" "}
              <span className="text-orange-600">p</span>=
              {"{"}{"{"}
              <span className="text-amber-300">t</span>:{" "}
              <span className="text-emerald-400">"1rem"</span>,{" "}
              <span className="text-amber-300">b</span>:{" "}
              <span className="text-emerald-400">"1.5rem"</span>
              {"}"}{"}"}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Div&gt;</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Text</span>{" "}
              <span className="text-orange-600">textSize</span>=
            <span className="text-emerald-400">"caption"</span>{" "}
              <span className="text-orange-600">textColor</span>=
            <span className="text-emerald-400">"dark"</span>
            <span className="text-amber-300">&gt;</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Payment Card<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;/Text&gt;</span><br />

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;Text</span>{" "}
              <span className="text-orange-600">textSize</span>=
            <span className="text-emerald-400">"caption"</span>{" "}
              <span className="text-orange-600">textColor</span>=
            <span className="text-emerald-400">"light"</span>
            <span className="text-amber-300">&gt;</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Component<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;/Text&gt;</span><br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-300">&lt;/Div&gt;</span><br />
          </code>
        </pre>
            </div>
        );
    }
}

export default CodeText;