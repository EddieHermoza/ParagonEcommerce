
import { TooltipProps } from 'recharts';



export default function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {

    if (active && payload && payload.length) {
    console.log(payload)
        return (
          <div className="custom-tooltip p-2 bg-black border border-neutral-800 rounded shadow space-y-1">
            <p className="label font-bold">{payload[0].name}</p>
            <div className="flex items-center justify-between gap-5">
              <div>
                <span
                  className="indicator mr-2 rounded-sm"
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    backgroundColor: payload[0].payload.fill
                  }}
                />
                <span>
                  ventas
                </span>
              </div>
              <p className="intro">{`${payload[0].value}`}</p>
            </div>
          </div>
        );
      }
    
      return null;
}
